import React, { Component } from "react";

class Films extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="admin-event-name">FILMS</p>

        <div className="add-event-div">
          <div style={{ display: "flex" }}>
            <p
              className="add-event-text add-event-text-active"
              style={{ marginRight: "15px" }}
            >
              All events
            </p>
            <p className="add-event-text">Event history</p>

            <div className="add-event-icon">
              <svg
                height="50px"
                viewBox="0 0 512 512"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#845be7"
              >
                <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
              </svg>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card mycard mycardFilms">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Event Title
                </h5>
                <p className="card-text">
                  <div className="card-created-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#845be7"
                      style={{ marginRight: "5px", marginBottom: "2px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    01/01/2021
                    <span style={{ float: "right" }}>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        fill="#845be7"
                        viewBox="0 0 512 512"
                        style={{ marginRight: "5px" }}
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C150.112,0,64,86.112,64,192c0,133.088,173.312,307.936,180.672,315.328C247.808,510.432,251.904,512,256,512
                                s8.192-1.568,11.328-4.672C274.688,499.936,448,325.088,448,192C448,86.112,361.888,0,256,0z M256,472.864
                                C217.792,431.968,96,293.664,96,192c0-88.224,71.776-160,160-160s160,71.776,160,160C416,293.568,294.208,431.968,256,472.864z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M256,96c-52.928,0-96,43.072-96,96s43.072,96,96,96c52.928,0,96-43.072,96-96C352,139.072,308.928,96,256,96z M256,256
			                          c-35.296,0-64-28.704-64-64s28.704-64,64-64s64,28.704,64,64S291.296,256,256,256z"
                            />
                          </g>
                        </g>
                      </svg>
                      Place
                    </span>
                  </div>
                  Event Description
                </p>
                <a href="/admin/film" className="edit_event">
                  რედაქტირება
                  <svg
                    width="20px"
                    height="20px"
                    fill="#845be7"
                    viewBox="0 -1 401.52289 401"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "15px" }}
                  >
                    <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                    <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card mycard mycardFilms">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Event Title
                </h5>
                <p className="card-text">
                  <div className="card-created-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#845be7"
                      style={{ marginRight: "5px", marginBottom: "2px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    01/01/2021
                    <span style={{ float: "right" }}>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        fill="#845be7"
                        viewBox="0 0 512 512"
                        style={{ marginRight: "5px" }}
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C150.112,0,64,86.112,64,192c0,133.088,173.312,307.936,180.672,315.328C247.808,510.432,251.904,512,256,512
                                s8.192-1.568,11.328-4.672C274.688,499.936,448,325.088,448,192C448,86.112,361.888,0,256,0z M256,472.864
                                C217.792,431.968,96,293.664,96,192c0-88.224,71.776-160,160-160s160,71.776,160,160C416,293.568,294.208,431.968,256,472.864z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M256,96c-52.928,0-96,43.072-96,96s43.072,96,96,96c52.928,0,96-43.072,96-96C352,139.072,308.928,96,256,96z M256,256
			                          c-35.296,0-64-28.704-64-64s28.704-64,64-64s64,28.704,64,64S291.296,256,256,256z"
                            />
                          </g>
                        </g>
                      </svg>
                      Place
                    </span>
                  </div>
                  Event Description
                </p>
                <a href="/admin/film" className="edit_event">
                  რედაქტირება
                  <svg
                    width="20px"
                    height="20px"
                    fill="#845be7"
                    viewBox="0 -1 401.52289 401"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "15px" }}
                  >
                    <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                    <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card mycard mycardFilms">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Event Title
                </h5>
                <p className="card-text">
                  <div className="card-created-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#845be7"
                      style={{ marginRight: "5px", marginBottom: "2px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    01/01/2021
                    <span style={{ float: "right" }}>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        fill="#845be7"
                        viewBox="0 0 512 512"
                        style={{ marginRight: "5px" }}
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C150.112,0,64,86.112,64,192c0,133.088,173.312,307.936,180.672,315.328C247.808,510.432,251.904,512,256,512
                                s8.192-1.568,11.328-4.672C274.688,499.936,448,325.088,448,192C448,86.112,361.888,0,256,0z M256,472.864
                                C217.792,431.968,96,293.664,96,192c0-88.224,71.776-160,160-160s160,71.776,160,160C416,293.568,294.208,431.968,256,472.864z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M256,96c-52.928,0-96,43.072-96,96s43.072,96,96,96c52.928,0,96-43.072,96-96C352,139.072,308.928,96,256,96z M256,256
			                          c-35.296,0-64-28.704-64-64s28.704-64,64-64s64,28.704,64,64S291.296,256,256,256z"
                            />
                          </g>
                        </g>
                      </svg>
                      Place
                    </span>
                  </div>
                  Event Description
                </p>
                <a href="/admin/film" className="edit_event">
                  რედაქტირება
                  <svg
                    width="20px"
                    height="20px"
                    fill="#845be7"
                    viewBox="0 -1 401.52289 401"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "15px" }}
                  >
                    <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                    <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card mycard mycardFilms">
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  Event Title
                </h5>
                <p className="card-text">
                  <div className="card-created-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#845be7"
                      style={{ marginRight: "5px", marginBottom: "2px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    01/01/2021
                    <span style={{ float: "right" }}>
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        fill="#845be7"
                        viewBox="0 0 512 512"
                        style={{ marginRight: "5px" }}
                      >
                        <g>
                          <g>
                            <path
                              d="M256,0C150.112,0,64,86.112,64,192c0,133.088,173.312,307.936,180.672,315.328C247.808,510.432,251.904,512,256,512
                                s8.192-1.568,11.328-4.672C274.688,499.936,448,325.088,448,192C448,86.112,361.888,0,256,0z M256,472.864
                                C217.792,431.968,96,293.664,96,192c0-88.224,71.776-160,160-160s160,71.776,160,160C416,293.568,294.208,431.968,256,472.864z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M256,96c-52.928,0-96,43.072-96,96s43.072,96,96,96c52.928,0,96-43.072,96-96C352,139.072,308.928,96,256,96z M256,256
			                          c-35.296,0-64-28.704-64-64s28.704-64,64-64s64,28.704,64,64S291.296,256,256,256z"
                            />
                          </g>
                        </g>
                      </svg>
                      Place
                    </span>
                  </div>
                  Event Description
                </p>
                <a href="/admin/film" className="edit_event">
                  რედაქტირება
                  <svg
                    width="20px"
                    height="20px"
                    fill="#845be7"
                    viewBox="0 -1 401.52289 401"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "15px" }}
                  >
                    <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                    <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Films;