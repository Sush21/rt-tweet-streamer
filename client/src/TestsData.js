export const tweet = {
  created_at: 'Thu Jan 28 01:30:09 +0000 2021',
  id_str: '1354602630899781634',
  full_text: '@VP: Get vaccinated. Save lives. https://t.co/5ZNXerlmIJ',
  favorite_count: 132354,
  description: '46th President of the United States, husband to @FLOTUS, proud dad & pop.',
  name: 'President Biden',
  profile_banner_url: 'https://pbs.twimg.com/profile_banners/1349149096909668363/1611162285',
  profile_image_url: 'http://pbs.twimg.com/profile_images/1349837426626330628/CRMNXzQJ_normal.jpg',
  screen_name: 'POTUS',
};

const tweet2 = {
  created_at: 'Thu Jan 28 19:50:01 +0000 2021',
  description: '46th President of the United States, husband to @FLOTUS, proud dad & pop. Tweets may be archived: https://t.co/IURuMIrzxb',
  favorite_count: 36703,
  full_text: 'Today’s actions are the first step in ensuring every American has access to quality, affordable health care. https://t.co/Csj6nQxc9m',
  id_str: '1354879423632334851',
  name: 'President Biden',
  profile_banner_url: 'https://pbs.twimg.com/profile_banners/1349149096909668363/1611162285',
  profile_image_url: 'http://pbs.twimg.com/profile_images/1349837426626330628/CRMNXzQJ_normal.jpg',
  screen_name: 'POTUS',
};

const tweet3 = {
  created_at: 'Thu Jan 28 01:30:09 +0000 2021',
  description: '46th President of the United States, husband to @FLOTUS, proud dad & pop. Tweets may be archived: https://t.co/IURuMIrzxb',
  favorite_count: 132756,
  full_text: 'One week down. https://t.co/yxrkWAXlkL',
  id_str: '1354602630899781634',
  name: 'President Biden',
  profile_banner_url: 'https://pbs.twimg.com/profile_banners/1349149096909668363/1611162285',
  profile_image_url: 'http://pbs.twimg.com/profile_images/1349837426626330628/CRMNXzQJ_normal.jpg',
  screen_name: 'POTUS',
};

const tweets = [];
for (let i = 0; i < 7; i += 1) tweets.push(tweet, tweet2, tweet3);
tweets.pop();
export default tweets;
