import React from 'react'
import { useForm } from 'react-hook-form'
import { JMCard } from '../../components'
import JMCheckbox from '../../components/JMCheckbox'
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';
import JMTextField, { JMInput, JMTextFieldContainer } from '../../components/JMTextField';
import JMTextArea from '../../components/JMTextArea';

export default function DeliveryPage() {
  const { register, watch } = useForm({
    resolver: yupResolver(object().shape({
      sendAsDropshipper: boolean().required(),
      email: string().email().required(),
      phoneNumber: string().matches(/^[\d|.|,]+/, "Must be only digits").required().strict(),
      deliveryAddress: string().required().strict(),
      dropshipperName: string().required().strict(),
      dropshipperPhoneNumber: string().matches(/^[\d|.|,]+/, "Must be only digits").required().strict(),
    }))
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Delivery details</h1>
        <JMCheckbox
          label='Send as dropshipper'
          { ...register('sendAsDropshipper') }
        />
      </div>
      <div style={{
        display: 'flex',
      }}>
        <div style={{ width: "49%" }}>
          <JMTextField
            label='Email'
            {...register("email")}
          />
          <JMTextField
            label='Phone Number'
            { ...register('phoneNumber') }
          />
          <JMTextArea
            label='Alamat'
            { ...register('address') }
          />
        </div>
        <div style={{ width: "2%" }}/>
        {
          watch('sendAsDropshipper') && (
            <div style={{ width: "49%" }}>
              <JMTextField
                label='Dropshipper Name'
                { ...register('dropshipperName') }
              />          
              <JMTextField
                label='Dropshipper Phone Number'
                { ...register('dropshipperPhoneNumber') }
              />
            </div>
          )
        }
      </div>
    </>
  )
}
