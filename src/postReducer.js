const initialState = {
  post: null,
  posts: [
    {
      id: 1,
      title: "post 1",
      text: "abcdefghijklmnopqrstuvwxyz",
      comments: [
        { id: "1abc", text: "comment 1" },
        { id: "2bcd", text: "comment 2" },
        { id: "23423", text: "comment 3" },
        { id: "dfsf2", text: "comment 4" }
      ]
    },
    {
      id: 2,
      title: "post 2",
      text: "abcdefghijklmnopqrstuvwxyz",
      comments: [
        { id: "11abc", text: "comment 1" },
        { id: "324fd", text: "comment 2" },
        { id: "234dsf", text: "comment 3" },
        { id: "23fdsf", text: "comment 4" },
        { id: "3d", text: "comment 5" },
        { id: "234d", text: "comment 6" }
      ]
    },
    {
      id: 3,
      title: "post 3",
      text: "abcdefghijklmnopqrstuvwxyz",
      comments: [
        { id: "23432e", text: "comment 1" },
        { id: "dsfsdf", text: "comment 2" },
        { id: "fdsr3", text: "comment 3" },
        { id: "sf3", text: "comment 4" },
        { id: "32fds", text: "comment 5" },
        { id: "dsv3", text: "comment 6" }
      ]
    },
    {
      id: 4,
      title: "post 4",
      text: "abcdefghijklmnopqrstuvwxyz",
      comments: [
        { id: "ve33e", text: "comment 1" },
        { id: "dsf3", text: "comment 2" },
        { id: "sf33f", text: "comment 3" },
        { id: "3cds", text: "comment 4" }
      ]
    },
    {
      id: 5,
      title: "post 5",
      text: "abcdefghijklmnopqrstuvwxyz",
      comments: [
        { id: "dfv3", text: "comment 1" },
        { id: "Sfv", text: "comment 2" },
        { id: "dsf", text: "comment 3" },
        { id: "23fd", text: "comment 4" }
      ]
    },
    {
      id: 6,
      title: "post 6",
      text: "abcdefghijklmnopqrstuvwxyz",
      comments: [
        { id: "dsfs", text: "comment 1" },
        { id: "vcxv", text: "comment 2" },
        { id: "23f", text: "comment 3" },
        { id: "cvsd", text: "comment 4" },
        { id: "dfds", text: "comment 5" },
        { id: "cdsf", text: "comment 6" }
      ]
    }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        post: state.posts.find(post => post.id === parseInt(action.payload))
      };
    default:
      return state;
  }
};

export default postReducer;
