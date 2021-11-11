import { getCustomRepository } from "typeorm";
import { Tag } from "../../entities/Tag";
import { TagRepository } from "../../repositories/TagRepositories";

export class Find {
  constructor(private tagRepository = getCustomRepository(TagRepository)) {}

  public async all(): Promise<Tag[]> {
    const tags = await this.tagRepository.find()

    if (!tags.length) throw new Error('No tags')

    return tags
  }
}