import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    token: 'skCezIMpjoPhOenyP4CFWqibQKkwyJIt03npE4RZxIHHP9qVRTF9sGQ0XOrkZdlm3z12SXPnvdIc27nwdGXL1PrT8jC2p5nWNNbPGrPmGAb6Xd5Xuq1ZpZEmGvx00CSzDPm5ES2LJ5eAvaIztvtKRogCvVEKC2YhRQiDufjjpMce2iD3Lc1h',
    projectId: '9jhpyg41',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
  });

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);