import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../Users/user-edit/user-edit.component';

export class PreventUnsavedChanges implements CanDeactivate<UserEditComponent>{

    canDeactivate(component: UserEditComponent): any{
        if (component.editForm.dirty) {
        return confirm('Jestes pewien ze chcesz kontynuowac? Wszelkie niezapisane zmiany zostana utracone');
        }
        return true;
    }
}
