import { ArticlesSource1Type } from '../models/TravelAppData/articles-source1-type';
import { ArticlesSource2Type } from '../models/TravelAppData/articles-source2-type';
import { ArticlesSource3Type } from '../models/TravelAppData/articles-source3-type';
import { ArticlesSource4Type } from '../models/TravelAppData/articles-source4-type';
import { DestinationsType } from '../models/TravelAppData/destinations-type';
import { ImageSet1Type } from '../models/TravelAppData/image-set1-type';
import { ImageSet2Type } from '../models/TravelAppData/image-set2-type';
import { SelectedArticlesType } from '../models/TravelAppData/selected-articles-type';
import { TravelAppData } from '../static-data/travel-app-data';

class TravelAppDataService {
  public getSelectedArticles(): SelectedArticlesType[] {
    return TravelAppData['SelectedArticlesType'];
  }

  public getDestinations(): DestinationsType[] {
    return TravelAppData['DestinationsType'];
  }

  public getImageSet1(): ImageSet1Type[] {
    return TravelAppData['ImageSet1Type'];
  }

  public getImageSet2(): ImageSet2Type[] {
    return TravelAppData['ImageSet2Type'];
  }

  public getArticlesSource1(): ArticlesSource1Type[] {
    return TravelAppData['ArticlesSource1Type'];
  }

  public getArticlesSource2(): ArticlesSource2Type[] {
    return TravelAppData['ArticlesSource2Type'];
  }

  public getArticlesSource3(): ArticlesSource3Type[] {
    return TravelAppData['ArticlesSource3Type'];
  }

  public getArticlesSource4(): ArticlesSource4Type[] {
    return TravelAppData['ArticlesSource4Type'];
  }
}
export const travelAppDataService: TravelAppDataService = new TravelAppDataService();
