import React, { useEffect } from 'react'
import styles from './ProfileFields.module.scss'
import Input from '../../../ui/input/Input'
import UploadFile from 'components/ui/uploadFile/UploadFile'
import ValidateField from '../validateField/ValidateField'
import { FormikProps } from 'formik'
import { IInitialValues } from '../Profile.interface'
import useViewMedia, { IViewMedia } from 'hooks/useViewMedia'
import ImagesList from './ImagesList/ImagesList'

interface IProfileFields {
	formik: FormikProps<IInitialValues>
	setPicture: React.Dispatch<React.SetStateAction<IViewMedia[]>>
	picture: IViewMedia[]
}

const ProfileFields = ({ formik, setPicture, picture }: IProfileFields) => {
	const { resultMedias, handlerMedia } = useViewMedia()

	useEffect(() => {
		setPicture(resultMedias)
	}, [resultMedias])

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<label htmlFor='firstname'>Имя</label>
				<Input
					type='text'
					id='firstname'
					placeholder={'Укажите своё Имя...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.firstname && formik.errors.firstname)}
					{...formik.getFieldProps('firstname')}
				></Input>
				<ValidateField
					isTouched={formik.touched.firstname}
					error={formik.errors.firstname}
				></ValidateField>
			</div>
			<div className={styles.item}>
				<label htmlFor='lastname'>Фамилия</label>
				<Input
					type='text'
					id='lastname'
					placeholder={'Укажите свою Фамилию...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.lastname && formik.errors.lastname)}
					{...formik.getFieldProps('lastname')}
				></Input>

				<ValidateField
					isTouched={formik.touched.lastname}
					error={formik.errors.lastname}
				></ValidateField>
			</div>
			<div className={styles.item}>
				<label htmlFor='patronymic'>Отчество</label>
				<Input
					type='text'
					id='patronymic'
					placeholder={'Укажите своё Отчество...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.patronymic && formik.errors.patronymic)}
					{...formik.getFieldProps('patronymic')}
				></Input>
				<ValidateField
					isTouched={formik.touched.patronymic}
					error={formik.errors.patronymic}
				></ValidateField>
			</div>
			<UploadFile onChange={({ target }) => handlerMedia([...target.files])}>
				<button type='button'>Загрузить файл</button>
			</UploadFile>

			<ImagesList picture={picture}></ImagesList>

			<div className={styles.item}>
				<label htmlFor='education'>Школа/Вуз</label>
				<Input
					id='education'
					placeholder={'Введите название  школы или вуза...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.education && formik.errors.education)}
					{...formik.getFieldProps('education')}
				></Input>
				<ValidateField
					isTouched={formik.touched.education}
					error={formik.errors.education}
				></ValidateField>
			</div>

			<div className={styles.item}>
				<label htmlFor='direction'>Направление</label>
				<Input
					id='direction'
					placeholder={'Введите название направления...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.direction && formik.errors.direction)}
					{...formik.getFieldProps('direction')}
				></Input>
				<ValidateField
					isTouched={formik.touched.direction}
					error={formik.errors.direction}
				></ValidateField>
			</div>
		</div>
	)
}

export default ProfileFields
