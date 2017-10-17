import SHA1 from 'crypto-js/sha1'
import li from 'li'

export default {
  name: 'login',
  data () {
		return {
			status: 'not_accepted',
			username: '',
			password: '',
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
		onSubmit(evt) {
			evt.preventDefault();
			////alert(JSON.stringify(this.form.clearpassword));
			//var hash = SHA1(this.form.clearpassword);
			////console.log(hash.toString());
			//this.form.password = hash.toString();
			//this.form.username = this.form.user;
			//console.log(this.form.password);
			
			////const URL = window.location.protocol+'//'+window.location.host;
			////const URL = 'http://localhost:8081';
			const user = this.username || this.form.username;
			const pass = this.password || this.form.password;
			
			this.$http.post('/login/api', {'username': user, 'password': SHA1(pass).toString()},{
				headers : { "Content-Type": "application/json", "Accept": "application/json" },
			}).then(function(res){
				console.log('Ok:');
				//console.log(li.parse(res.headers.map.link[0]));
				
				window.location.replace(li.parse(res.headers.map.link[0]).next);
				
			}, function(res){
				console.log('Error:');
				console.log(res);
			});
		}
		
	}
}
