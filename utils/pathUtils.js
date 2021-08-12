import fs from 'fs'

export function getPathFromFileNames(directoryPath) {
    const filenames = fs.readdirSync(directoryPath)
    return filenames.map(filename => {
        return {
            params: {
                id: filename.replace(/\.json$/, '')
            }
        }
    })
}