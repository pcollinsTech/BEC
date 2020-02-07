import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="top-header">
                <div className="top-header-thumb">
                  <img src="img/top-header1.jpg" alt="nature" />
                </div>
                <div className="profile-section">
                  <div className="row">
                    <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                      <ul className="profile-menu">
                        <li>
                          <a href="02-ProfilePage.html" className="active">
                            Timeline
                          </a>
                        </li>
                        <li>
                          <a href="05-ProfilePage-About.html">About</a>
                        </li>
                        <li>
                          <a href="06-ProfilePage.html">Friends</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                      <ul className="profile-menu">
                        <li>
                          <a href="07-ProfilePage-Photos.html">Photos</a>
                        </li>
                        <li>
                          <a href="09-ProfilePage-Videos.html">Videos</a>
                        </li>
                        <li>
                          <div className="more">
                            <span className="olymp-three-dots-icon"></span>
                            <ul className="more-dropdown more-with-triangle">
                              <li>
                                <a href="#">Report Profile</a>
                              </li>
                              <li>
                                <a href="#">Block Profile</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="control-block-button">
                    <a href="35-YourAccount-FriendsRequests.html" className="btn btn-control bg-blue">
                      <span className="olymp-happy-face-icon"></span>
                    </a>

                    <a href="#" className="btn btn-control bg-purple">
                      <span className="olymp-chat---messages-icon"></span>
                    </a>

                    <div className="btn btn-control bg-primary more">
                      <span className="olymp-settings-icon"></span>

                      <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                        <li>
                          <a href="#" data-toggle="modal" data-target="#update-header-photo">
                            Update Profile Photo
                          </a>
                        </li>
                        <li>
                          <a href="#" data-toggle="modal" data-target="#update-header-photo">
                            Update Header Photo
                          </a>
                        </li>
                        <li>
                          <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="top-header-author">
                  <a href="02-ProfilePage.html" className="author-thumb">
                    <img src="img/author-main1.jpg" alt="author" />
                  </a>
                  <div className="author-content">
                    <a href="02-ProfilePage.html" className="h4 author-name">
                      James Spiegel
                    </a>
                    <div className="country">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
