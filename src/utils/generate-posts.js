import faker, { fake } from "faker";

const allTags = [
  "health",
  "science",
  "gaming",
  "sports",
  "food",
  "comedy",
  "movies",
  "popular",
  "politics",
  "family",
];

const generateTags = () => {
  const times = faker.random.number({ min: 2, max: 5 });
  const tags = [];

  for (let i = 0; i < times; i += 1) {
    const tag = faker.random.arrayElement(allTags);

    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }
  return tags;
};

const generatePosts = (amount) => {
  const posts = [];
  for (let i = 0; i < amount; i++) {
    posts.push({
      id: faker.random.uuid(),
      creatAt: faker.date.recent(),
      text: faker.lorem.paragraph(2),
      author: {
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
      },
      tags: generateTags(),
    });
  }
  return posts;
};

console.log(JSON.stringify(generatePosts(9)));
