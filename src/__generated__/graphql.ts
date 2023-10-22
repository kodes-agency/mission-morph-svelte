/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AboutPage = {
  __typename?: 'AboutPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ctaButton?: Maybe<Scalars['String']['output']>;
  ctaContent?: Maybe<Scalars['String']['output']>;
  ctaHeading?: Maybe<Scalars['String']['output']>;
  heroContent?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroThumbnail?: Maybe<UploadFileEntityResponse>;
  seo?: Maybe<ComponentSeoSeo>;
  step?: Maybe<Array<Maybe<ComponentAboutPageServiceSteps>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutPageStepArgs = {
  filters?: InputMaybe<ComponentAboutPageServiceStepsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  ctaButton?: InputMaybe<Scalars['String']['input']>;
  ctaContent?: InputMaybe<Scalars['String']['input']>;
  ctaHeading?: InputMaybe<Scalars['String']['input']>;
  heroContent?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroThumbnail?: InputMaybe<Scalars['ID']['input']>;
  seo?: InputMaybe<ComponentSeoSeoInput>;
  step?: InputMaybe<Array<InputMaybe<ComponentAboutPageServiceStepsInput>>>;
};

export type Blog = {
  __typename?: 'Blog';
  blogCategories?: Maybe<BlogCategoryRelationResponseCollection>;
  contents?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSeoSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogBlogCategoriesArgs = {
  filters?: InputMaybe<BlogCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogCategory = {
  __typename?: 'BlogCategory';
  blogs?: Maybe<BlogRelationResponseCollection>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogCategoryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogCategoryEntity = {
  __typename?: 'BlogCategoryEntity';
  attributes?: Maybe<BlogCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogCategoryEntityResponse = {
  __typename?: 'BlogCategoryEntityResponse';
  data?: Maybe<BlogCategoryEntity>;
};

export type BlogCategoryEntityResponseCollection = {
  __typename?: 'BlogCategoryEntityResponseCollection';
  data: Array<BlogCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogCategoryFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogCategoryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogCategoryInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
};

export type BlogCategoryRelationResponseCollection = {
  __typename?: 'BlogCategoryRelationResponseCollection';
  data: Array<BlogCategoryEntity>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  blogCategories?: InputMaybe<BlogCategoryFiltersInput>;
  contents?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  blogCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contents?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSeoSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentAboutPageServiceSteps = {
  __typename?: 'ComponentAboutPageServiceSteps';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentAboutPageServiceStepsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutPageServiceStepsFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAboutPageServiceStepsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutPageServiceStepsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAboutPageServiceStepsInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomePageHeroImgs = {
  __typename?: 'ComponentHomePageHeroImgs';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentHomePageHeroImgsImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomePageHeroImgsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomePageHeroImgsFiltersInput>>>;
  not?: InputMaybe<ComponentHomePageHeroImgsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomePageHeroImgsFiltersInput>>>;
};

export type ComponentHomePageHeroImgsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSeoSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSeoSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSeoSeoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceLayoutFeatures = {
  __typename?: 'ComponentServiceLayoutFeatures';
  feature?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentServiceLayoutFeaturesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutFeaturesFiltersInput>>>;
  feature?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceLayoutFeaturesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutFeaturesFiltersInput>>>;
};

export type ComponentServiceLayoutFeaturesInput = {
  feature?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentServiceLayoutHeroSection = {
  __typename?: 'ComponentServiceLayoutHeroSection';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentServiceLayoutHeroSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutHeroSectionFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServiceLayoutHeroSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutHeroSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServiceLayoutHeroSectionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceLayoutStatistics = {
  __typename?: 'ComponentServiceLayoutStatistics';
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['Int']['output']>;
  paragraph?: Maybe<Scalars['String']['output']>;
};

export type ComponentServiceLayoutStatisticsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutStatisticsFiltersInput>>>;
  not?: InputMaybe<ComponentServiceLayoutStatisticsFiltersInput>;
  number?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutStatisticsFiltersInput>>>;
  paragraph?: InputMaybe<StringFilterInput>;
};

export type ComponentServiceLayoutStatisticsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  paragraph?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceLayoutSubService = {
  __typename?: 'ComponentServiceLayoutSubService';
  contents?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<ComponentServiceLayoutFeatures>>>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentServiceLayoutSubServiceFeaturesArgs = {
  filters?: InputMaybe<ComponentServiceLayoutFeaturesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceLayoutSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutSubServiceFiltersInput>>>;
  contents?: InputMaybe<StringFilterInput>;
  features?: InputMaybe<ComponentServiceLayoutFeaturesFiltersInput>;
  not?: InputMaybe<ComponentServiceLayoutSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutSubServiceFiltersInput>>>;
  price?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServiceLayoutSubServiceInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutFeaturesInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServicePageServiceCta = {
  __typename?: 'ComponentServicePageServiceCta';
  id: Scalars['ID']['output'];
  noButton?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  yesButton?: Maybe<Scalars['String']['output']>;
};

export type ComponentServicePageServiceCta2 = {
  __typename?: 'ComponentServicePageServiceCta2';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentServicePageServiceCta2Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServicePageServiceCtaInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  noButton?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  yesButton?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AboutPage | Blog | BlogCategory | ComponentAboutPageServiceSteps | ComponentHomePageHeroImgs | ComponentSeoSeo | ComponentServiceLayoutFeatures | ComponentServiceLayoutHeroSection | ComponentServiceLayoutStatistics | ComponentServiceLayoutSubService | ComponentServicePageServiceCta | ComponentServicePageServiceCta2 | HomePage | I18NLocale | Service | ServicePage | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  aboutContent?: Maybe<Scalars['String']['output']>;
  aboutHeading?: Maybe<Scalars['String']['output']>;
  aboutImage?: Maybe<UploadFileEntityResponse>;
  blogContent?: Maybe<Scalars['String']['output']>;
  blogHeading?: Maybe<Scalars['String']['output']>;
  blogThumbnail?: Maybe<UploadFileEntityResponse>;
  blogs?: Maybe<BlogRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ctaContent?: Maybe<Scalars['String']['output']>;
  ctaHeading?: Maybe<Scalars['String']['output']>;
  ctaImage?: Maybe<UploadFileEntityResponse>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroVercorLarge?: Maybe<UploadFileEntityResponse>;
  heroVercorMedium?: Maybe<UploadFileEntityResponse>;
  heroVercorSmall?: Maybe<UploadFileEntityResponse>;
  images?: Maybe<Array<Maybe<ComponentHomePageHeroImgs>>>;
  seo?: Maybe<ComponentSeoSeo>;
  servicesHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageImagesArgs = {
  filters?: InputMaybe<ComponentHomePageHeroImgsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  aboutContent?: InputMaybe<Scalars['String']['input']>;
  aboutHeading?: InputMaybe<Scalars['String']['input']>;
  aboutImage?: InputMaybe<Scalars['ID']['input']>;
  blogContent?: InputMaybe<Scalars['String']['input']>;
  blogHeading?: InputMaybe<Scalars['String']['input']>;
  blogThumbnail?: InputMaybe<Scalars['ID']['input']>;
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ctaContent?: InputMaybe<Scalars['String']['input']>;
  ctaHeading?: InputMaybe<Scalars['String']['input']>;
  ctaImage?: InputMaybe<Scalars['ID']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroVercorLarge?: InputMaybe<Scalars['ID']['input']>;
  heroVercorMedium?: InputMaybe<Scalars['ID']['input']>;
  heroVercorSmall?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<ComponentHomePageHeroImgsInput>>>;
  seo?: InputMaybe<ComponentSeoSeoInput>;
  servicesHeading?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBlog?: Maybe<BlogEntityResponse>;
  createBlogCategory?: Maybe<BlogCategoryEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteBlogCategory?: Maybe<BlogCategoryEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteServicePage?: Maybe<ServicePageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateBlogCategory?: Maybe<BlogCategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateServicePage?: Maybe<ServicePageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
};


export type MutationCreateBlogCategoryArgs = {
  data: BlogCategoryInput;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBlogCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBlogCategoryArgs = {
  data: BlogCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServicePageArgs = {
  data: ServicePageInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  blog?: Maybe<BlogEntityResponse>;
  blogCategories?: Maybe<BlogCategoryEntityResponseCollection>;
  blogCategory?: Maybe<BlogCategoryEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  service?: Maybe<ServiceEntityResponse>;
  servicePage?: Maybe<ServicePageEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlogCategoriesArgs = {
  filters?: InputMaybe<BlogCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroSection?: Maybe<ComponentServiceLayoutHeroSection>;
  homePageCTA?: Maybe<Scalars['String']['output']>;
  homePageContent?: Maybe<Scalars['String']['output']>;
  homePageCursorLable?: Maybe<Scalars['String']['output']>;
  homePageThumbnail?: Maybe<UploadFileEntityResponse>;
  homePageTitle?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<ComponentSeoSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<Array<Maybe<ComponentServiceLayoutStatistics>>>;
  subService?: Maybe<Array<Maybe<ComponentServiceLayoutSubService>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceStatisticsArgs = {
  filters?: InputMaybe<ComponentServiceLayoutStatisticsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ServiceSubServiceArgs = {
  filters?: InputMaybe<ComponentServiceLayoutSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  heroSection?: InputMaybe<ComponentServiceLayoutHeroSectionFiltersInput>;
  homePageCTA?: InputMaybe<StringFilterInput>;
  homePageContent?: InputMaybe<StringFilterInput>;
  homePageCursorLable?: InputMaybe<StringFilterInput>;
  homePageTitle?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  statistics?: InputMaybe<ComponentServiceLayoutStatisticsFiltersInput>;
  subService?: InputMaybe<ComponentServiceLayoutSubServiceFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  heroSection?: InputMaybe<ComponentServiceLayoutHeroSectionInput>;
  homePageCTA?: InputMaybe<Scalars['String']['input']>;
  homePageContent?: InputMaybe<Scalars['String']['input']>;
  homePageCursorLable?: InputMaybe<Scalars['String']['input']>;
  homePageThumbnail?: InputMaybe<Scalars['ID']['input']>;
  homePageTitle?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<ComponentSeoSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  statistics?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutStatisticsInput>>>;
  subService?: InputMaybe<Array<InputMaybe<ComponentServiceLayoutSubServiceInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ServicePage = {
  __typename?: 'ServicePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  serviceCTA?: Maybe<ComponentServicePageServiceCta>;
  serviceCTA2?: Maybe<ComponentServicePageServiceCta2>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServicePageEntity = {
  __typename?: 'ServicePageEntity';
  attributes?: Maybe<ServicePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServicePageEntityResponse = {
  __typename?: 'ServicePageEntityResponse';
  data?: Maybe<ServicePageEntity>;
};

export type ServicePageInput = {
  serviceCTA?: InputMaybe<ComponentServicePageServiceCtaInput>;
  serviceCTA2?: InputMaybe<ComponentServicePageServiceCta2Input>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', heroHeading?: string | null, heroContent?: string | null, ctaHeading?: string | null, ctaContent?: string | null, ctaButton?: string | null, heroThumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, seo?: { __typename?: 'ComponentSeoSeo', description?: string | null, keywords?: string | null, title?: string | null } | null, step?: Array<{ __typename?: 'ComponentAboutPageServiceSteps', content?: string | null, title?: string | null, id: string } | null> | null } | null } | null } | null };

export type BlogsQueryVariables = Exact<{
  filters?: InputMaybe<BlogFiltersInput>;
}>;


export type BlogsQuery = { __typename?: 'Query', blogCategories?: { __typename?: 'BlogCategoryEntityResponseCollection', data: Array<{ __typename?: 'BlogCategoryEntity', attributes?: { __typename?: 'BlogCategory', category?: string | null } | null }> } | null, blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', slug?: string | null, title?: string | null, publishedAt?: any | null, blogCategories?: { __typename?: 'BlogCategoryRelationResponseCollection', data: Array<{ __typename?: 'BlogCategoryEntity', attributes?: { __typename?: 'BlogCategory', category?: string | null } | null }> } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null, homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', blogHeading?: string | null, blogContent?: string | null, blogThumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', heroHeading?: string | null, aboutHeading?: string | null, aboutContent?: string | null, blogContent?: string | null, blogHeading?: string | null, ctaContent?: string | null, ctaHeading?: string | null, servicesHeading?: string | null, aboutImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, images?: Array<{ __typename?: 'ComponentHomePageHeroImgs', image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> } | null } | null> | null, heroVercorLarge?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, heroVercorMedium?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, heroVercorSmall?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, blogs?: { __typename?: 'BlogRelationResponseCollection', data: Array<{ __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', title?: string | null, slug?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, blogCategories?: { __typename?: 'BlogCategoryRelationResponseCollection', data: Array<{ __typename?: 'BlogCategoryEntity', attributes?: { __typename?: 'BlogCategory', category?: string | null } | null }> } | null } | null }> } | null, blogThumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, ctaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, seo?: { __typename?: 'ComponentSeoSeo', keywords?: string | null, title?: string | null, description?: string | null } | null } | null } | null } | null, services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', attributes?: { __typename?: 'Service', slug?: string | null, color?: string | null, homePageCursorLable?: string | null, homePageCTA?: string | null, homePageContent?: string | null, homePageTitle?: string | null, homePageThumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null };

export type SingleBlogQueryVariables = Exact<{
  filters?: InputMaybe<BlogFiltersInput>;
}>;


export type SingleBlogQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', contents?: string | null, slug?: string | null, publishedAt?: any | null, title?: string | null, blogCategories?: { __typename?: 'BlogCategoryRelationResponseCollection', data: Array<{ __typename?: 'BlogCategoryEntity', attributes?: { __typename?: 'BlogCategory', category?: string | null } | null }> } | null, seo?: { __typename?: 'ComponentSeoSeo', description?: string | null, keywords?: string | null, title?: string | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null };

export type ServicePageQueryVariables = Exact<{
  filters?: InputMaybe<ServiceFiltersInput>;
}>;


export type ServicePageQuery = { __typename?: 'Query', servicePage?: { __typename?: 'ServicePageEntityResponse', data?: { __typename?: 'ServicePageEntity', attributes?: { __typename?: 'ServicePage', serviceCTA?: { __typename?: 'ComponentServicePageServiceCta', title?: string | null, noButton?: string | null, yesButton?: string | null } | null, serviceCTA2?: { __typename?: 'ComponentServicePageServiceCta2', title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null } | null } | null } | null, services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', attributes?: { __typename?: 'Service', color?: string | null, homePageContent?: string | null, homePageTitle?: string | null, title?: string | null, heroSection?: { __typename?: 'ComponentServiceLayoutHeroSection', title?: string | null, content?: string | null, id: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null, homePageThumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, seo?: { __typename?: 'ComponentSeoSeo', title?: string | null, keywords?: string | null, description?: string | null } | null, statistics?: Array<{ __typename?: 'ComponentServiceLayoutStatistics', number?: number | null, paragraph?: string | null } | null> | null, subService?: Array<{ __typename?: 'ComponentServiceLayoutSubService', price?: string | null, title?: string | null, contents?: string | null, id: string, features?: Array<{ __typename?: 'ComponentServiceLayoutFeatures', feature?: string | null } | null> | null } | null> | null } | null }> } | null };


export const AboutPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroContent"}},{"kind":"Field","name":{"kind":"Name","value":"heroThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ctaHeading"}},{"kind":"Field","name":{"kind":"Name","value":"ctaContent"}},{"kind":"Field","name":{"kind":"Name","value":"ctaButton"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"step"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutPageQuery, AboutPageQueryVariables>;
export const BlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BlogFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"blogCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogHeading"}},{"kind":"Field","name":{"kind":"Name","value":"blogThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogsQuery, BlogsQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"aboutHeading"}},{"kind":"Field","name":{"kind":"Name","value":"aboutContent"}},{"kind":"Field","name":{"kind":"Name","value":"aboutImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroVercorLarge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroVercorMedium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroVercorSmall"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"blogCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogContent"}},{"kind":"Field","name":{"kind":"Name","value":"blogHeading"}},{"kind":"Field","name":{"kind":"Name","value":"blogThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ctaContent"}},{"kind":"Field","name":{"kind":"Name","value":"ctaHeading"}},{"kind":"Field","name":{"kind":"Name","value":"ctaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"servicesHeading"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"homePageCursorLable"}},{"kind":"Field","name":{"kind":"Name","value":"homePageCTA"}},{"kind":"Field","name":{"kind":"Name","value":"homePageContent"}},{"kind":"Field","name":{"kind":"Name","value":"homePageThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePageTitle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const SingleBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SingleBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BlogFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SingleBlogQuery, SingleBlogQueryVariables>;
export const ServicePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServicePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"servicePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceCTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"noButton"}},{"kind":"Field","name":{"kind":"Name","value":"yesButton"}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceCTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePageContent"}},{"kind":"Field","name":{"kind":"Name","value":"homePageThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"paragraph"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feature"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ServicePageQuery, ServicePageQueryVariables>;