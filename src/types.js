// @flow

export type ConvParams = {
    DatePeriod: { startDate: string, endDate: string },
    Artifact: string,
    Tag: Array<string>,
    Author: string,
    Team: string,
}
export type PresentParams = {
    imageIds: Array<string>
}

export type AuthData = {
    accessToken: string,
    csrfToken: string,
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
export type Team = {
    name: string,
    id: string
}
export type ResponseData = { images: Array<Image>, teams: Array<Team> }
export type Response = { data: ResponseData };
