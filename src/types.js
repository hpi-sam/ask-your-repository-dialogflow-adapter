// @flow

export type ConvParams = {
    DatePeriod: { startDate: string, endDate: string },
    Artifact: string,
    Tag: Array<string>,
    Author: string
}

export type Image = {
    id: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    tags: Array<string>,
    fileDate: string,
    url: string,
    score: number
}
export type Response = { data: { images: Array<Image> } };
