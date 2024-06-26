import '../index.css'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup'

function Booking() {

    const MyTextInput = ({ label, ...props }) => {

        const [field, meta] = useField(props);
        return (
          <>
            <label htmlFor={props.id || props.name}>{label}</label>

            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </>
        );
      };

      const MySelect = ({ label, ...props }) => {

        const [field, meta] = useField(props);
        return (
          <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </div>
        );
      };

    return(
        <>
            <section className="Booking">
                <div className='booking-container'>
                    <h1 className='markazi-text'>Reservation</h1>
                    <Formik
                    initialValues={{date: '', time: '', guests: '', occasion: ''}}
                    validationSchema={Yup.object({
                        date: Yup.string()
                            .required('Required'),
                        time: Yup.string()
                            .required('Required')
                            .oneOf(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],'Invalid time'),
                        guests: Yup.number()
                            .required('Required')
                            .min(1, "Must be a number more than 1")
                            .max(10, "Must be a number less than 10"),
                        occasion: Yup.string()
                            .required('Required')
                            .oneOf(['Birthday', 'Anniversary'], 'Invalid occasion type'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                    >
                        <Form className='karla-text'>
                            <MyTextInput
                            label="Choose Date"
                            name="date"
                            type="date"
                            />

                            <MySelect label="Choose time" name="time">
                                <option value="">Choose a time</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </MySelect>

                            <MyTextInput
                            label="Number of guests"
                            type="number"
                            name="guests"
                            placeholder="1"
                            />

                            <MySelect label="Occasion" name="occasion">
                                <option value="">Choose occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </MySelect>
                            <button className='primary-btn' type="submit">Make your reservation</button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default Booking;