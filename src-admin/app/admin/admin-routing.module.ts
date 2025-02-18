import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { EnrollmentManagementComponent } from './components/enrollment-management/enrollment-management.component';

const routes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'enrollment-management', component: EnrollmentManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
