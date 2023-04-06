import React from 'react'
import uniqid from 'uniqid'

export interface IViewMedia {
	id: string
	linkView: string
	uploadFile: string | File
}

const viewMedia = (
	files: File[]
) => {
	
	const resultMedias = []
	
	files.forEach(file => {
		const reader = new FileReader()
		reader.onload = () => {
			const result = {
				id: uniqid(),
				linkView: reader.result.toString(),
				uploadFile: file,
			}
			resultMedias.push(result)
		}
		reader.readAsDataURL(file)
	})

	return resultMedias
	
}

export default viewMedia
