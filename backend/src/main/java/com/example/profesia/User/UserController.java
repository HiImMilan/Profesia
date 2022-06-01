package com.example.profesia.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/users/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/allusers")
    public Long getAllUsers() {
        // return first user
        return userRepository.count();
    }

    @GetMapping("/info")
    public UserInfo getUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(auth.getName());
        if (user == null) {
            return null;
        }

        boolean IsRecrutor = false;
        UserInfo userInfo = new UserInfo(user.getName(), user.getEmail(), user.getAvatar(),IsRecrutor);
        return userInfo;
    }

    @RequestMapping(path = "/registerUser", method = POST, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public @ResponseBody String registerUser(@RequestParam MultiValueMap<String, String> userFormData) {
        userRepository.save(new User(userFormData.getFirst("name"), userFormData.getFirst("username"), userFormData.getFirst("password"), userFormData.getFirst("url")));
        return "OK";
    }
}
