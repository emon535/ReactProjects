let mockResponse = {
    data: [
        {
            "userId": 1,
            "id": 1
        },
        {
            "userId": 1,
            "id": 2
        }
    ]
};

jest.mock('axios', () => {
    return {
        get: function (url) {
            return new Promise(() => {
                return mockResponse;
            }, () => { });
        }
    };
});

import axios from 'axios';
import SampleService from '../services/sample.service';
import config from '../config';

describe('SampleService', () => {
    beforeEach(() => {
        jest.spyOn(axios, 'get');
    });

    it('should be defined', () => {
        expect(SampleService).toBeDefined();
    });

    it('should have getPosts method defined', () => {
        expect(SampleService.getPosts).toBeDefined();
    });

    describe('getPosts', () => {
        it('should make http call with proper url', () => {
            SampleService.getPosts();
            expect(axios.get).toHaveBeenCalledWith(config.url.base + config.url.posts);
        });

        it('should return proper response', () => {
            SampleService.getPosts().then(response => {
                expect(response[0].userId).equals(mockResponse[0].userId);
                expect(response[0].id).equals(mockResponse[0].id);
                expect(response[1].userId).equals(mockResponse[1].userId);
                expect(response[1].id).equals(mockResponse[1].id);
            });
        });
    });
});