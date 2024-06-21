const getResourcesList = require('../get-resources-list')
const createTree = require('./create-tree')
const createIndex = require('./create-index')
const createTables = require('./create-tables')
const writeToFile = require('../write-to-file')

const resourcesList = getResourcesList()

const warning = `<!--🛑 👉 Please make edits in the /resources folder in alphabetical order. 
The /db folder will be updated upon merge request. -->`


const header = `<div align="center">
  Teachtube
</div>`

const links = `<div align="center">
    <a href="API.md">API</a> •
    <a href="CONTRIBUTING.md">Contributing Guide</a> •
    <a href="https://github.com/Agustrihanton/teach-tube/issues">Issues</a> •
    <a href="https://github.com/Agustrihanton/teach-tube/pulls">Pull Requests</a> •
    <a href="LICENSE">License</a>
</div>`



async function updateReadme() {
    try {
        const resourcesTree = createTree(resourcesList)
        const index = createIndex(resourcesTree)
        const tables = createTables(resourcesTree)

        await writeToFile({
            data: `${warning} \n\n ${header} <br/><br/><br/> ${links} \n\n ${index} ${tables}`,
            filePath: './README.md',
        })
    } catch (error) {
        throw new Error(error)
    }
}

updateReadme()
