import React from "react";
import { Form, Field } from 'react-final-form'
import InputMask from "react-input-mask";
import ClaimForm from "./styledComponents/ClaimForm";
import {required, phone} from "../../utils/general";
import Button from "../../styledComponents/Button";
import {sendUserRequest} from "../../requests/userRequest";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

interface Props {
  onSubmit: () => void;
}

const LeaveClaimForm: React.FC<Props> = ({onSubmit}) => {

  const handleSubmit = async (values) => {
    try {
      await sendUserRequest(values);
      onSubmit();
      alert("Успешно отправлено!");
    } catch (e) {
      onSubmit();
      alert("Успешно не отправлено!");
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <ClaimForm onSubmit={handleSubmit}>
          <div>
            <label>Возраст ребёнка*</label>
            <Field
              name="age"
              validate={value => required(value)}
              parse={(value) =>
                value
                  .replace(/[^0-9]/g, "")
                  .substr(value.length - 1, 1)
              }
              render={({input, meta}) => (
                <>
                  <input
                    {...input}
                    type="text"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            />
          </div>
          <Field
            name="phone"
            parse={value =>
              value
                .replace(/\)/g, "")
                .replace(/\(/g, "")
                .replace(/-/g, "")
                .replace(/ /g, "")
                .replace(/\+/g, "")
            }
            validate={value => (required(value) || phone(value))}
            render={({ input, meta }) => (
              <div>
                <label>Телефон*</label>
                <InputMask
                  disabled={false}
                  mask="+7 (999) 999-99-99"
                  {...input}
                >
                  {InputProps => <input disabled={false} {...InputProps} />}
                </InputMask>

                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <div>
            <label>Комментарий</label>
            <Field
              name="comment"
              render={({input, meta}) =>
                <>
                  <textarea
                    style={{resize:"none"}}
                    rows={3}
                    {...input}
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
              </>
              }
            />
          </div>
          <Button type="submit">Отправить заявку</Button>
        </ClaimForm>
      )}>
    </Form>
  )
}

export default LeaveClaimForm;
