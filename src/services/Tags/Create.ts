import { getCustomRepository } from "typeorm";
import { CreateTag, Tag } from "../../entities/Tag";
import { TagRepository } from "../../repositories/TagRepositories";

export class Create {
  constructor(private tagRepository = getCustomRepository(TagRepository)) {}

  public async execute({ name }: CreateTag): Promise<Tag> {
    
    if (!name) throw new Error('Name incorrect')

    const alreadyExist = await this.tagRepository.findOne({ where: {name}})

    if (alreadyExist) throw new Error('Tag already exists')

    const tag = this.tagRepository.create({name})

    await this.tagRepository.save(tag)

    return tag
  }
}