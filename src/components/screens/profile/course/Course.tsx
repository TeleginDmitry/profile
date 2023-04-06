import React, { useEffect, useState } from 'react'
import { ICourse } from 'shared/interfaces/course.interface'
import styles from './Course.module.scss'
import CourseService from 'services/course.service'

// Тут по хорошему всё вынести, например в компонент CourseList and CourseItem

const Course = () => {
	const [courseList, setCourseList] = useState<ICourse[]>([])

	async function getCourse() {
		const response = await CourseService.getAllCourses()

		if (response?.data) {
			setCourseList(response.data)
		}
	}

	useEffect(() => {
		getCourse()
	}, [])

	return (
		<ul className={styles.courses}>
			{courseList.map(course => {
				return (
					<li key={course.id} className={styles.item}>
						<span key={course.id}>{course.title}</span>
						<input type='checkbox' />
					</li>
				)
			})}
		</ul>
	)
}

export default Course
