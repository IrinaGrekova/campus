import { NewsDto, NewsListRequestParams } from "./types";

export const getNewsRequest = (params?: NewsListRequestParams) =>
  new Promise<NewsDto[]>((res) => {
    setTimeout(
      () =>
        res([
          {
            id: 1,
            creationDate: "13.02.2023",
            activeTag: "Факультет арбузолитейного дела",

            tags: ["студенческая жизнь"],
            title: "Студенческая жизнь",
            text: "Танцы, вокал, оркестр, актерское мастерство, поэзия, съемки, фотосессии, хоккей, волейбол, баскетбол, единоборства, благотворительность, волонтерство — это далеко не полный список того, чем занимаются",
            imageData:
              "data:image/jpeg;base64,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",
          },

          {
            id: 2,
            creationDate: "01.04.2023",
            activeTag: "Laboris nulla esse ex adipisicing",
            title: "АПРЕЛЬСКОЕ ЗАСЕДАНИЕ РАСШИРЕННОГО РЕКТОРАТА",
            text: "Cillum velit ipsum amet laborum nulla irure nostrud quis consequat magna velit nulla voluptate. Culpa irure veniam consectetur officia et anim pariatur in culpa velit veniam minim veniam. Aliqua dolor occaecat magna consectetur deserunt nulla id officia id. Enim et officia non consequat do Lorem aliqua qui exercitation non. Ullamco mollit labore veniam est voluptate dolor cupidatat cupidatat enim sint aute ea. Elit quis ut laborum exercitation labore qui eiusmod. Sunt ex sit in nisi id quis qui. Occaecat laborum exercitation in cupidatat minim duis. Laboris amet nulla mollit duis qui adipisicing et quis. Est velit proident cillum officia esse ea ea esse excepteur id eiusmod proident incididunt amet. Officia fugiat do labore id. Aliquip excepteur ad nulla officia ullamco nisi irure eu aute. Deserunt nostrud eiusmod qui consectetur. Commodo minim laboris cupidatat sunt. Sunt adipisicing consectetur Lorem nulla consectetur in voluptate irure veniam dolor ex. Ex et amet officia excepteur elit. Proident fugiat quis id id id duis aliqua excepteur. Id proident nulla fugiat dolore commodo. Nulla cupidatat ullamco ipsum exercitation cillum duis quis cillum non enim dolor. Exercitation exercitation amet eu dolore minim voluptate pariatur esse labore ullamco Lorem eiusmod laboris duis. Tempor occaecat nulla consectetur consequat nostrud eu incididunt deserunt tempor proident non nostrud aliquip velit. Consequat duis tempor mollit aute quis amet qui nulla. Officia quis duis occaecat sint sunt pariatur anim adipisicing qui ea.",
            imageData:
              "https://nnov.hse.ru/data/2023/04/19/2029367546/6DSC07182.jpg",
          },
          {
            id: 3,
            creationDate: "20.03.2023",
            title: "Новость без фотографии",
            tags: ["студенты", "вопросы", "заседание"],
            text: "Reprehenderit consectetur eiusmod id occaecat culpa adipisicing.",
          },
        ]),
      2000
    );
  });
