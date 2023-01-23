import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { JMCard, JMVerticalDivider } from '../../components'
import JMCheckbox from '../../components/JMCheckbox'
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string } from 'yup';
import JMTextField from '../../components/JMTextField';
import JMTextArea from '../../components/JMTextArea';
import SummaryPane from '../../components/SummaryPane';
import { STEPS } from '../../global/constants';

export default function DeliveryPage({
  setStep = () => {},
  step,
  setDeliveryData,
  deliveryData = {},
}) {
  const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(object().shape({
      sendAsDropshipper: boolean().required(),
      email: string().email().required(),
      phoneNumber: string().matches(/^[\d|.|,]+/, "Must be only digits").required().strict(),
      deliveryAddress: string().required().strict(),
      dropshipperName: string()
        .when('sendAsDropshipper', (sendAsDropshipper, field) => (
          sendAsDropshipper ? field.required().strict() : field
        )),
      dropshipperPhoneNumber: string().matches(/^[0-9]/ , "Must be only digits")
        .when('sendAsDropshipper', (sendAsDropshipper, field) => (
          sendAsDropshipper ? field.required().strict() : field.notRequired()
        )),
    })),
    defaultValues: deliveryData
  });

  useEffect(() => {
    if (deliveryData) {
      setValue('email', deliveryData.email);
      setValue('sendAsDropshipper', deliveryData.sendAsDropshipper);
      setValue('phoneNumber', deliveryData.phoneNumber);
      setValue('deliveryAddress', deliveryData.deliveryAddress);
      setValue('dropshipperName', deliveryData.dropshipperName);
      setValue('dropshipperPhoneNumber', deliveryData.dropshipperPhoneNumber);
    }
  }, [deliveryData])

  function onSubmit(data) {
    setStep(STEPS.PAYMENT);
    setDeliveryData(data);
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
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
              errors={errors}
            />
            <JMTextField
              label='Phone Number'
              errors={errors}
              { ...register('phoneNumber') }
            />
            <JMTextArea
              label=''
              errors={errors}
              { ...register('deliveryAddress') }
            />
          </div>
          <div style={{ width: "2%" }}/>
          {
            watch('sendAsDropshipper') && (
              <div style={{ width: "49%" }}>
                <JMTextField
                  label='Dropshipper Name'
                  { ...register('dropshipperName') }
                  errors={errors}
                />          
                <JMTextField
                  label='Dropshipper Phone Number'
                  { ...register('dropshipperPhoneNumber') }
                  errors={errors}
                />
              </div>
            )
          }
        </div>
      </div>
      <JMVerticalDivider/>
      <div style={{ width: "50%" }}>
        <SummaryPane
          step={step}
          setStep={setStep}
          isDropship={watch('sendAsDropshipper')}
          disableNextButton={Object.keys(errors).length}
          onNextButtonClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  )
}
