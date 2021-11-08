import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepositories"
import { Tag } from "../entities/Tag"


export class CreateTagService {

  async execute(name: string): Promise<Tag> {
    const createTagRespository = getCustomRepository(TagRepository)

    if (!name) throw new Error('Tag incorrect!')

    const alreadyExist = await createTagRespository.findOne({
      name
    })

    if (alreadyExist) throw new Error('Tag already exists!')

    const tag = createTagRespository.create({name})

    await createTagRespository.save(tag)

    return tag
  }
}