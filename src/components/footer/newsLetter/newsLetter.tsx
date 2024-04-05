import styles from './newsLetter.module.scss'
import {useForm} from 'react-hook-form'
import { emailForm } from '../../../interfaces/interfaces'

const NewsLetter = () => {

    const { register, handleSubmit, formState:{errors} }  = useForm<emailForm>({
        defaultValues:{}
    });

    const submit: SubmitHandler<emailForm> = data =>{
        console.log(data)
    }
    const error: SubmitErrorHandler<emailForm> = data =>{
        console.log(data)
    }

   

  return (
    <div className={styles.newsLetter}>
      <h3>KinoArea</h3>
      <h4 className={styles.newsLetter__title}>Subscribe to E-mail newsletter</h4>
      <p className={styles.newsLetter__subtitle}>If you want to keep abreast of the latest news and movie releases, fill out the form below and sign up for a free E-mail newsletter! </p>
        <form className={styles.newsLetter__form} onSubmit={handleSubmit(submit,error)} >
            <input 
            className={styles.newsLetter__form_input}
             type="email" 
             {...register('email', {required:true,  pattern:{
              value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message:' Wrong email'
             }})} 
             placeholder='Enter your E-mail' />
            <button className={styles.newsLetter__form_btn} type="submit">Subcscribe</button>
        </form>
            <div className={styles.newsletter__form__policy}>
              <input  type="checkbox" className={styles.newsLetter__form_checkbox} name='Agree' />
              <label htmlFor="Agree">I agree to the terms of the privacy policy</label>
            </div>
    </div>
  )
}

export default NewsLetter
