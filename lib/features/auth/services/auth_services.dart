import 'package:flutter_amazon_clone/constants/global_variables.dart';
import 'package:flutter_amazon_clone/models/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  //sign up user
  void signUpUser({
    required String name,
    required String email,
    required String password,
  }) async {
    try {
      User user = User(
          id: '',
          name: name,
          email:email,
          password: password,
          address: '',
          type: '',
          token: ''
      );

      http.Response res=await http.post(
        Uri.parse('$uri/api/signup'),
        body: user.toJson(),
        headers:<String,String>{
          'Content-Type': 'application/json; charset=UTF-8',
        }
      );
      print(res.body);
    } catch (e) {

    }
  }
}
