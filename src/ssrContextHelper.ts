export interface CacheHelperCacheGroupEntry {
  name: string
  tags: string[]
}

export default class NuxtSSRCacheHelper {
  tags: string[]
  cacheGroups: CacheHelperCacheGroupEntry[]
  cacheable: boolean

  constructor() {
    this.tags = []
    this.cacheGroups = []
    this.cacheable = false
  }
}
