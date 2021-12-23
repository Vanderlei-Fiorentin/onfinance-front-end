import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleModel } from 'src/app/core/models/role.model';
import { UsuarioRoleModel } from 'src/app/core/models/usuario-role.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { RoleService } from 'src/app/core/services/role.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  formUsuario!: FormGroup;
  formPerfil!: FormGroup;
  usuarioRole!: UsuarioRoleModel;
  roles: RoleModel[] = [];
  rolesSelecionadas: RoleModel[] = [];
  confirmacaoSenha: string = '';
  foto!: File;
  page: number = 1;
  preview: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.onInitForms();
    this.getRoles();
  }

  onInitForms() {
    // Formulário de usuário
    this.formUsuario = this.formBuilder.group({
      id: [],
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      administrador: [false],
      ativo: [false]
    });
    // Formulário de perfil de usuário
    this.formPerfil = this.formBuilder.group({
      id: [],
      inscricao: ['', [Validators.required, Validators.maxLength(14)]],
      dataNascimento: ['', Validators.required],
      avisoFaturaVencida: [false],
      avisoFaturaAVencer: [false]
    });
  }

  save() {

    if (this.formUsuario.value.senha !== this.formUsuario.value.confirmarSenha) {
      this.alertService.warn('As senhas devem ser iguais!', this.options);
      return;
    }

    this.formUsuario.removeControl('confirmarSenha');

    var formData: FormData = new FormData();

    if (this.foto !== undefined) {
      formData.append('foto', this.foto, this.foto.name);
    }

    formData.append('usuario', JSON.stringify(this.formUsuario.value));
    formData.append('perfil', JSON.stringify(this.formPerfil.value));
    formData.append('roles', JSON.stringify(this.rolesSelecionadas));

    this.usuarioService.saveUsuarioPerfil(formData).subscribe({
      next: () => {
        this.alertService.success('Usuário inserido com sucesso!', this.options);
        this.router.navigate(['usuarios']);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao inserir usuário!');
      }
    });

  }

  getRoles() {
    this.roleService.findAll().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar roles!');
      }
    });
  }

  pagination(index: number) {
    this.page += (index);
  }

  onChange(event: any) {
    this.foto = event.target.files[0];
  }

  onCheckboxChange(event: any, role: RoleModel) {
    if (event.target.checked) {
      this.pushRoleSelecionada(role);
    } else {
      this.spliceRoleSelecionada(role);
    }

  }

  pushRoleSelecionada(role: RoleModel) {
    this.rolesSelecionadas.push(role);
    console.log(this.rolesSelecionadas);
  }

  spliceRoleSelecionada(role: RoleModel) {
    for (var index = 0; index < this.rolesSelecionadas.length; index++) {
      var rol = this.rolesSelecionadas[index];
      if (rol.id == role.id) {
        this.rolesSelecionadas.splice(index, 1);
      }
    }
    console.log(this.rolesSelecionadas);
  }

}
