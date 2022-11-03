import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakTokenParsed } from 'keycloak-js';

@Injectable()
export class AuthService {
	constructor(private keycloakService: KeycloakService) {}

	public getLoggedUser(): KeycloakTokenParsed | undefined {
		try {
			const userDetails: KeycloakTokenParsed | undefined =
				this.keycloakService.getKeycloakInstance().idTokenParsed;
			console.log('🚀', this.keycloakService.getKeycloakInstance());
			return userDetails;
		} catch (e) {
			console.error('Exception', e);
			return undefined;
		}
	}

	public isLoggedIn(): Promise<boolean> {
		return this.keycloakService.isLoggedIn();
	}

	public register() {
		this.keycloakService.getKeycloakInstance().register();
	}

	public login(): void {
		this.keycloakService.login();
	}

	public logout(): void {
		this.keycloakService.logout(window.location.origin);
	}

	public redirectToProfile(): void {
		this.keycloakService.getKeycloakInstance().accountManagement();
	}

	public getRoles(): string[] {
		return this.keycloakService.getUserRoles();
	}

	public isUserInRole(role: string): boolean {
		return this.keycloakService.isUserInRole(role);
	}

	public getUserGroups(): string[] {
		return this.keycloakService.getKeycloakInstance().tokenParsed?.groups;
	}
}
