interface Web3CreatorProfile {
  _id: string;
  farcaster: Record<string, unknown>;
  lens: Record<string, unknown>;
  yup: Record<string, unknown>;
  bsky: {
    did: string;
    handle: string;
    avatar: string;
    fullname: string;
    bio: string;
  };
  handle: string;
  avatar: string;
  lastActiveDate: string;
  yupScore: number;
  noData: boolean;
}

interface Creator {
  address: string;
  did: string;
  avatarUrl: string;
  handle: string;
  fullname: string;
  yupScore: number;
}

interface Web3Preview {
  id: string;
  contentType: string;
  protocol: string;
  creator: Creator;
  attachments: any[];
  content: string;
  urls: any[];
  linkPreview: any[];
  mentions: Record<string, unknown>;
  meta: {
    uri: string;
    cid: string;
    author: Creator & {
      viewer: {
        muted: boolean;
        blockedBy: boolean;
      };
      labels: any[];
    };
    record: {
      text: string;
      type: string;
      langs: string[];
      createdAt: string;
    };
    replyCount: number;
    repostCount: number;
    likeCount: number;
    indexedAt: string;
    viewer: Record<string, unknown>;
    labels: any[];
    viewUrl: string;
    parentPostId: null;
    rootPostId: null;
    quotedPostId: null;
    postType: string;
    isLabelled: boolean;
  };
  createdAt: string;
  platformMetrics: {
    likes: number;
    reposts: number;
    comments: number;
  };
  updatedAt: string;
}

export interface Post {
  _id: { postid: string };
  author: string;
  catVotes: {
    overall: {
      up: number;
      down: number;
    };
  };
  claimedCreatorRewards: number;
  createdAt: string;
  creatorInfluence: number;
  creatorPoolRedeemed: number;
  influence: {
    false: number;
    true: number;
  };
  isCrossPost: boolean;
  isFlagged: boolean;
  isModeratorFlagged: boolean;
  lang: string;
  negativeWeight: number;
  positiveWeight: number;
  previewData: {
    creator: string;
    img: string;
    title: string;
    description: string;
  };
  rating: {
    overall: {
      ratingCount: number;
      ratingWeight: number;
    };
  };
  secondaryTags: any[];
  tag: string;
  totalCreatorRewards: number;
  updatedAt: string;
  url: string;
  web3Preview: Web3Preview;
  keywords: string[];
  web3CreatorProfile: Web3CreatorProfile;
  rawPositiveWeight: number;
  quantiles: {
    overall: string;
    popularity: string;
  };
  sextiles: {
    overall: string;
    popularity: string;
  };
  weights: {
    overall: number;
    popularity: number;
  };
  avatar: string;
}
