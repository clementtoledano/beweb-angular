import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';

//initialise la connexion avec Keyclaok grace à aux  variables d'environement
export const initializer = (
	keycloak: KeycloakService
): (() => Promise<boolean>) => {
	const options: KeycloakOptions = {
		config: environment.keycloak,
		loadUserProfileAtStartUp: true,
		initOptions: {
			onLoad: 'check-sso',
			// onLoad: 'login-required',
			checkLoginIframe: false,
		},
		bearerExcludedUrls: [],
	};

	return () => keycloak.init(options);
};
