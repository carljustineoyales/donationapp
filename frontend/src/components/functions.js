// import { read_cookie} from 'sfcookies';

export const withToken = () => {
	// return read_cookie( 'JWT' );
	return sessionStorage.getItem( 'JWT' );
};

export const getUserName = () => {
	// return read_cookie( 'username' );
	return sessionStorage.getItem( 'username' );
};

export const getRole = () => {
	// return read_cookie('role');
	return sessionStorage.getItem('role');
};

export const getId = () => {
	return sessionStorage.getItem('id');
}

// export const URL = 'https://donationapptest.localhost'; //Change this when deploying
export const strapi = 'http://localhost:1337'; //Change this when deploying
