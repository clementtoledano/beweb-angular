import { TestBed } from '@angular/core/testing';
import { KeycloakService } from 'keycloak-angular';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
	let guard: AuthGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({ providers: [AuthGuard, KeycloakService] });
		guard = TestBed.inject(AuthGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
