import { getCustomRepository } from "typeorm";
import { Tag } from "../../entities/Tag";
import { TagRepository } from "../../repositories/TagRepositories";

export interface RequestToCreateTag {
  name: string
}

export class Create {
  constructor(private tagRepository = getCustomRepository(TagRepository)) {}

  public async execute({ name }: RequestToCreateTag): Promise<Tag> {
    
    if (!name) throw new Error('Name incorrect')

    const alreadyExist = await this.tagRepository.findOne({ where: {name}})

    if (alreadyExist) throw new Error('Tag already exists')

    const tag = this.tagRepository.create({name})

    await this.tagRepository.save(tag)

    return tag
  }
}