const fileExplorerData = {
    1: {
      id: 1,
      name: "Evaluation",
      type: "folder",
      parentId: null,
      children: [2, 3, 4],
    },
    2: {
      id: 2,
      name: "Documents",
      type: "folder",
      parentId: 1,
      children: [5, 6, 7],
    },
    3: {
      id: 3,
      name: "Desktop",
      type: "folder",
      parentId: 1,
      children: [8, 9],
    },
    4: {
      id: 4,
      name: "Downloads",
      type: "folder",
      parentId: 1,
      children: [10, 14, 13],
    },
    5: {
      id: 5,
      name: "Document1.jpg",
      type: "file",
      parentId: 2,
      children: [],
    },
    6: {
      id: 6,
      name: "Document2.jpg",
      type: "file",
      parentId: 2,
      children: [],
    },
    7: {
      id: 7,
      name: "Document3.jpg",
      type: "file",
      parentId: 2,
      children: [],
    },
    8: {
      id: 8,
      name: "Screenshot1.jpg",
      type: "file",
      parentId: 3,
      children: [],
    },
    9: {
      id: 9,
      name: "videopal.mp4",
      type: "file",
      parentId: 3,
      children: [],
    },
    10: {
      id: 10,
      name: "Drivers",
      type: "folder",
      parentId: 4,
      children: [11, 12],
    },
    11: {
      id: 11,
      name: "Printerdriver.dmg",
      type: "file",
      parentId: 10,
      children: [],
    },
    12: {
      id: 12,
      name: "cameradriver.dmg",
      type: "file",
      parentId: 10,
      children: [],
    },
    13: {
      id: 13,
      name: "chromedriver.dmg",
      type: "file",
      parentId: 4,
      children: [],
    },
    14: {
      id: 14,
      name: "Applications",
      type: "folder",
      parentId: 4,
      children: [15, 16, 17, 18],
    },
    15: {
      id: 15,
      name: "Webstorm.dmg",
      type: "file",
      parentId: 14,
      children: [],
    },
    16: {
      id: 16,
      name: "Pycharm.dmg",
      type: "file",
      parentId: 14,
      children: [],
    },
    17: {
      id: 17,
      name: "FileZila.dmg",
      type: "file",
      parentId: 14,
      children: [],
    },
    18: {
      id: 18,
      name: "Mattermost.dmg",
      type: "file",
      parentId: 14,
      children: [],
    },
  };
  
  export default fileExplorerData;  