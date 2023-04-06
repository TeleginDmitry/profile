import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'

export interface IViewMedia {
	id: string
	linkView: string
	uploadFile: string | File
}

const useViewMedia = () => {
	const [resultMedias, setResultMedias] = useState<IViewMedia[]>([])

	const handlerMedia = (files: File[]) => {
		files.forEach(file => {
			const reader = new FileReader()
			reader.onload = () => {
				const result = {
					id: uniqid(),
					linkView: reader.result.toString(),
					uploadFile: file,
				}
        setResultMedias([result])
				
			}
			reader.readAsDataURL(file)
		})
	}

	return {resultMedias, handlerMedia}
}

export default useViewMedia
