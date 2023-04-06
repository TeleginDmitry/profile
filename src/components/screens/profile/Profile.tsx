import React, { useState } from 'react'
import styles from './Profile.module.scss'
import { useFormik } from 'formik'
import Button from '../../ui/button/Button'
import { IViewMedia } from 'utils/viewMedia/ViewMedia'
import ProfileFields from './profileFields/ProfileFields'
import { IInitialValues } from './Profile.interface'
import Course from './course/Course'

const validate = async (values: IInitialValues) => {
	const errors: Partial<IInitialValues> = {}

	if (!values.firstname) {
		errors.firstname = 'Это поле обязательно для заполнения'
	}

	if (!values.lastname) {
		errors.lastname = 'Это поле обязательно для заполнения'
	}

	if (!values.direction) {
		errors.direction = 'Это поле обязательно для заполнения'
	}

	if (!values.education) {
		errors.education = 'Это поле обязательно для заполнения'
	}

	return errors
}

const initialValues: IInitialValues = {
	firstname: '',
	lastname: '',
	patronymic: '',
	education: '',
	direction: '',
	course: '',
}

const Profile = () => {
	const [picture, setPicture] = useState<IViewMedia[]>([])

	const formik = useFormik<IInitialValues>({
		initialValues,
		validate,
		onSubmit: onSubmitForm,
	})

	function onSubmitForm(values: IInitialValues) {
		const formData = new FormData()

		if (values?.firstname) {
			formData.append('firstname', values.firstname)
		}
		if (values?.lastname) {
			formData.append('lastname', values.lastname)
		}
		if (values?.patronymic) {
			formData.append('patronymic', values.patronymic)
		}
		if (values?.education) {
			formData.append('education', values.education)
		}

		if (values?.course) {
			formData.append('course', values.course)
		}

		if (values?.direction) {
			formData.append('direction', values.direction)
		}

		if (picture?.[0]?.uploadFile) {
			formData.append('picture', picture[0].uploadFile)
		}


		// query
	}

	return (
		<form onSubmit={formik.handleSubmit} className={styles.form}>
			<ProfileFields
				picture={picture}
				setPicture={setPicture}
				formik={formik}
			></ProfileFields>
			<Course></Course>
			<Button type='submit'>Сохранить</Button>
		</form>
	)
}

export default Profile
