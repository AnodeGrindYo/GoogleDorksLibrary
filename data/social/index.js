// Google Dorks Database - Social Media Aggregator
import { linkedinDorks } from './linkedin.js';
import { twitterDorks } from './twitter.js';
import { facebookDorks } from './facebook.js';
import { instagramDorks } from './instagram.js';
import { videoPlatformsDorks } from './video-platforms.js';
import { messagingPlatformsDorks } from './messaging-platforms.js';
import { communityPlatformsDorks } from './community-platforms.js';
import { musicPlatformsDorks } from './music-platforms.js';
import { gamingPlatformsDorks } from './gaming-platforms.js';
import { creativePlatformsDorks } from './creative-platforms.js';
import { photographyPlatformsDorks } from './photography-platforms.js';
import { developerPlatformsDorks } from './developer-platforms.js';
import { businessPlatformsDorks } from './business-platforms.js';
import { miscPlatformsDorks } from './misc-platforms.js';

// Combine all social media dorks from different platform modules
export const socialDorks = [
    ...linkedinDorks,
    ...twitterDorks,
    ...facebookDorks,
    ...instagramDorks,
    ...videoPlatformsDorks,
    ...messagingPlatformsDorks,
    ...communityPlatformsDorks,
    ...musicPlatformsDorks,
    ...gamingPlatformsDorks,
    ...creativePlatformsDorks,
    ...photographyPlatformsDorks,
    ...developerPlatformsDorks,
    ...businessPlatformsDorks,
    ...miscPlatformsDorks
];