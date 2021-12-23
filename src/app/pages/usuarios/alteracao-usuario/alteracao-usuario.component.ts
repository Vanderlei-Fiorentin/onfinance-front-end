import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { RoleModel } from 'src/app/core/models/role.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { RoleService } from 'src/app/core/services/role.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { UsuarioDto } from 'src/app/shared/dtos/usuario-dto';

@Component({
  selector: 'app-alteracao-usuario',
  templateUrl: './alteracao-usuario.component.html',
  styleUrls: ['./alteracao-usuario.component.css']
})
export class AlteracaoUsuarioComponent implements OnInit {

  formUsuario!: FormGroup;
  formPerfil!: FormGroup;
  foto!: File;
  roles: any[] = [];
  rolesSelecionadas: RoleModel[] = [];
  page: number = 1;
  preview: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadByIdUsuario(params['id']);
    });
  }

  loadByIdUsuario(id: number) {
    this.usuarioService.findUsuarioDtoById(id).subscribe({
      next: (usuario) => {
        usuario.perfil.dataNascimento = FunctionsUtil.dateFormat(usuario.perfil.dataNascimento);
        usuario.roles.map(role => {
          this.rolesSelecionadas.push(role.usuarioRoleID.role);
        });
        this.onInitForms(usuario);
        this.getRoles();
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar o usuário!');
      }
    });
  }

  onInitForms(usuario: UsuarioDto) {
    // Formulário de usuário
    this.formUsuario = this.formBuilder.group({
      id: [usuario.id],
      nome: [usuario.nome, [Validators.required, Validators.maxLength(50)]],
      usuario: [usuario.usuario, Validators.required],
      email: [usuario.email, [Validators.required, Validators.email]],
      senha: [null],
      confirmarSenha: [null],
      administrador: [usuario.administrador],
      ativo: [usuario.ativo]
    });
    // Formulário de perfil de usuário
    this.formPerfil = this.formBuilder.group({
      id: [usuario.perfil.id],
      inscricao: [usuario.perfil.inscricao, [Validators.required, Validators.maxLength(14)]],
      dataNascimento: [usuario.perfil.dataNascimento, Validators.required],
      avisoFaturaVencida: [usuario.perfil.avisoFaturaVencida],
      avisoFaturaAVencer: [usuario.perfil.avisoFaturaAVencer]
    });
  }

  async onSubmit() {

    if (this.formUsuario.value.senha !== this.formUsuario.value.confirmarSenha) {
      this.alertService.warn('As senhas devem ser iguais!', this.options);
      return;
    }

    this.formUsuario.removeControl('confirmarSenha');


    var formData: FormData = new FormData();

    if (this.foto !== undefined) {
      formData.append('foto', this.foto, this.foto.name);
      console.log('Entrou')
    }

    formData.append('perfil', JSON.stringify(this.formPerfil.value));
    formData.append('usuario', JSON.stringify(this.formUsuario.value));
    formData.append('roles', JSON.stringify(this.rolesSelecionadas));

    console.log(formData)

    this.usuarioService.updateUsuarioPerfil(formData).subscribe({
      next: () => {
        this.alertService.success('Usuário alterado com sucesso!', this.options);
        this.router.navigate(['usuarios']);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao alterar o usuário!');
      }
    });

  }

  getRoles() {
    this.roleService.findAll().subscribe({
      next: (roles) => {
        roles.map(role => {
          this.roles.push({
            role: role,
            value: this.isSelected(role)
          });
        });
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
  }

  spliceRoleSelecionada(role: RoleModel) {
    for (var index = 0; index < this.rolesSelecionadas.length; index++) {
      var rol = this.rolesSelecionadas[index];
      if (rol.id == role.id) {
        this.rolesSelecionadas.splice(index, 1);
      }
    }
  }

  isSelected(role: RoleModel): boolean {
    let possui = false;
    this.rolesSelecionadas.forEach(r => {
      if (r.id == role.id) {
        possui = true;
      }
    });
    return possui;
  }

}
