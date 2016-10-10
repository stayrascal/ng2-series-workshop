import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {App, providers} from "./app";
import {HTTP_PROVIDERS} from "@angular/http";
import {router} from "./app/routes";
import {provideRouter} from "@angular/router";

bootstrap(App, [
    ...HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provideRouter(router),
    ...providers]
)
