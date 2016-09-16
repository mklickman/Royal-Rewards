import { Injectable } from '@angular/core';

import { Photo } from './photo';
import { PHOTOS } from './mock-photos';

@Injectable()
export class PhotoService {
    
    getPhotos(): Photo[] {
        return PHOTOS;
    }

    getPhoto(id) {
        return PHOTOS[id];
    }

    addPhoto(imageData) {
        // Normally, this would be an xhr POST request
        PHOTOS.push({
            isApproved: false,
            data: 'data:image/jpeg;base64,' + imageData
        });
    }
}