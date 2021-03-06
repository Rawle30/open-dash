import React, { PropTypes } from 'react';
import Link from './side_nav_link';

const SideNav = ({ siteTitle, user }) => (
  <div id='sidebar-wrapper'>
    <ul className='sidebar-nav'>
      <li className='sidebar-brand text-center'>
        <a href='/'>
          {siteTitle}
        </a>
      </li>
      <li><div className='sidebar-spacer'/></li>
      <Link label='Dashboard' link='/' user={user} roles='any' />
      <Link label='Devices' link='/devices' user={user} roles={['admin', 'manager']} />
      {/* <Link label='Lifx Panel' link='/panel' user={user} roles={['admin', 'manager', 'viewer']} /> */}
      <Link label='Users' link='/users' user={user} roles={['admin', 'manager']} />
      <Link label='Job Queue' link='/jobs' user={user} roles='admin' />
      <Link label='Settings' link='/settings' user={user} roles='admin' />
      <li><div className='sidebar-spacer'/></li>
      <Link label='Profile' link={`/users/${user._id}`} user={user} roles='any' />
      <Link label='Logout' link='/logout' user={user} roles='any' />
    </ul>
  </div>
);

SideNav.propTypes = {
  siteTitle: PropTypes.string,
  user: PropTypes.object
};

export default SideNav;
