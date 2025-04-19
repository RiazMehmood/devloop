import { type SchemaTypeDefinition } from 'sanity'
import  heroImage  from './../schemas/heroImage'
import topBarInfo from '../schemas/topBarInfo'
import project from '../schemas/project'
import techStack from '../schemas/techStack'
import { service } from '../schemas/services'
import contactMessage from '../schemas/contactMessage'
import contactInfo from '../schemas/contactInfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage, topBarInfo, project, techStack, service, contactMessage, contactInfo],
}
