import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepositories";


export class ListTagService {

  async execute() {
    const tagRepository = getCustomRepository(TagRepository)

    const tag = await tagRepository.find()

    return tag
  }
}