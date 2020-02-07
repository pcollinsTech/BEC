import React, { Fragment } from "react";

const SideNav = () => {
  return (
    <Fragment>
      <div className="fixed-sidebar">
        <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
          <a href="02-ProfilePage.html" className="logo">
            <div className="img-wrap">
              <img src="img/logo.png" alt="Olympus" />
            </div>
          </a>

          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <ul className="left-menu">
              <li>
                <a href="#" className="js-sidebar-open">
                  <svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="OPEN MENU"></svg>
                </a>
              </li>
              <li>
                <a href="03-Newsfeed.html">
                  <svg
                    className="olymp-newsfeed-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="NEWSFEED"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="16-FavPagesFeed.html">
                  <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"></svg>
                </a>
              </li>
              <li>
                <a href="17-FriendGroups.html">
                  <svg
                    className="olymp-happy-faces-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="FRIEND GROUPS"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="18-MusicAndPlaylists.html">
                  <svg
                    className="olymp-headphones-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="MUSIC&PLAYLISTS"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="19-WeatherWidget.html">
                  <svg
                    className="olymp-weather-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="WEATHER APP"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                  <svg
                    className="olymp-calendar-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="CALENDAR AND EVENTS"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="24-CommunityBadges.html">
                  <svg
                    className="olymp-badge-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Community Badges"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="25-FriendsBirthday.html">
                  <svg
                    className="olymp-cupcake-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Friends Birthdays"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="26-Statistics.html">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Account Stats"
                  ></svg>
                </a>
              </li>
              <li>
                <a href="27-ManageWidgets.html">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Manage Widgets"
                  ></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
          <a href="02-ProfilePage.html" className="logo">
            <div className="img-wrap">
              <img src="img/logo.png" alt="Olympus" />
            </div>
            <div className="title-block">
              <h6 className="logo-title">olympus</h6>
            </div>
          </a>

          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <ul className="left-menu">
              <li>
                <a href="#" className="js-sidebar-open">
                  <svg className="olymp-close-icon left-menu-icon"></svg>
                  <span className="left-menu-title">Collapse Menu</span>
                </a>
              </li>
              <li>
                <a href="03-Newsfeed.html">
                  <svg
                    className="olymp-newsfeed-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="NEWSFEED"
                  ></svg>
                  <span className="left-menu-title">Newsfeed</span>
                </a>
              </li>
              <li>
                <a href="16-FavPagesFeed.html">
                  <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"></svg>
                  <span className="left-menu-title">Fav Pages Feed</span>
                </a>
              </li>
              <li>
                <a href="17-FriendGroups.html">
                  <svg
                    className="olymp-happy-faces-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="FRIEND GROUPS"
                  ></svg>
                  <span className="left-menu-title">Friend Groups</span>
                </a>
              </li>
              <li>
                <a href="18-MusicAndPlaylists.html">
                  <svg
                    className="olymp-headphones-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="MUSIC&PLAYLISTS"
                  ></svg>
                  <span className="left-menu-title">Music & Playlists</span>
                </a>
              </li>
              <li>
                <a href="19-WeatherWidget.html">
                  <svg
                    className="olymp-weather-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="WEATHER APP"
                  ></svg>
                  <span className="left-menu-title">Weather App</span>
                </a>
              </li>
              <li>
                <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                  <svg
                    className="olymp-calendar-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="CALENDAR AND EVENTS"
                  ></svg>
                  <span className="left-menu-title">Calendar and Events</span>
                </a>
              </li>
              <li>
                <a href="24-CommunityBadges.html">
                  <svg
                    className="olymp-badge-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Community Badges"
                  ></svg>
                  <span className="left-menu-title">Community Badges</span>
                </a>
              </li>
              <li>
                <a href="25-FriendsBirthday.html">
                  <svg
                    className="olymp-cupcake-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Friends Birthdays"
                  ></svg>
                  <span className="left-menu-title">Friends Birthdays</span>
                </a>
              </li>
              <li>
                <a href="26-Statistics.html">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Account Stats"
                  ></svg>
                  <span className="left-menu-title">Account Stats</span>
                </a>
              </li>
              <li>
                <a href="27-ManageWidgets.html">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-toggle="tooltip"
                    data-placement="right"
                    data-original-title="Manage Widgets"
                  ></svg>
                  <span className="left-menu-title">Manage Widgets</span>
                </a>
              </li>
            </ul>

            <div className="profile-completion">
              <div className="skills-item">
                <div className="skills-item-info">
                  <span className="skills-item-title">Profile Completion</span>
                  <span className="skills-item-count">
                    <span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span>
                    <span className="units">76%</span>
                  </span>
                </div>
                <div className="skills-item-meter">
                  <span className="skills-item-meter-active bg-primary" style={{ width: "76%" }}></span>
                </div>
              </div>

              <span>
                Complete <a href="#">your profile</a> so people can know more about you!
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
