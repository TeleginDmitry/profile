import axios, { AxiosResponse } from 'axios'
import { API_URL } from 'configs/api.config'
import { ICourse } from 'shared/interfaces/course.interface'

const CourseService = {
  getAllCourses: (): Promise<AxiosResponse<ICourse[]>> => {
    
    return axios.get(API_URL + 'course/')
  }
}


export default CourseService