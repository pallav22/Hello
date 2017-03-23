package com.hellokoding.auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author 703157940
 *
 */
@EnableSwagger2 //1-- Enables Springfox swagger 2
@EnableAutoConfiguration 
@Configuration 
@ComponentScan("com.hellokoding.auth") //2-- 	Instructs spring where to scan for API controllers
@SpringBootApplication
public class WebApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(WebApplication.class);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(WebApplication.class, args);
    }
    
    
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.any())                          
          .build();                                           
    }
    
   /* @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.any())                          
          .build()
          .pathMapping("/")//8--Adds a servlet path mapping, when the servlet has a path mapping. this prefixes paths with the provided path mapping
			//.directModelSubstitute(LocalDate.class, String.class)
			.genericModelSubstitutes(ResponseEntity.class)
			.alternateTypeRules(newRule(typeResolver.resolve(DeferredResult.class, typeResolver.resolve(ResponseEntity.class, WildcardType.class)), typeResolver.resolve(WildcardType.class))) //10 -- example ResponseEntity<T> with T. alternateTypeRules allows custom rules that are a bit more involved. The example substitutes DeferredResult<ResponseEntity<T>> with T generically
			.useDefaultResponseMessages(false) //11-- Flag to indicate if default http response codes need to be used or not
			.globalResponseMessage(RequestMethod.GET, newArrayList(new ResponseMessageBuilder().code(500).message("500 message").responseModel(new ModelRef("Error")).build())) 
			.securitySchemes(newArrayList(apiKey())) //14-- Sets up the security schemes used to protect the apis. Supported schemes are ApiKey, BasicAuth and OAuth
			.securityContexts(newArrayList(securityContext())); //15-- Provides a way to globally set up security contexts for operation. The idea here is that we provide a way to select operations to be protected by one of the specified security schemes.

    }
    
    
    @Autowired
	private TypeResolver typeResolver;
 
	private ApiKey apiKey() {
		return new ApiKey("mykey", "api_key", "header"); //16--Here we use ApiKey as the security schema that is identified by the name mykey
	}
	
	
	private SecurityContext securityContext() {
		return SecurityContext.builder().securityReferences(defaultAuth()).forPaths(PathSelectors.regex("/anyPath.*")).build(); //17-- Selector for the paths this security context applies to.
	}
 
	List<SecurityReference> defaultAuth() {
		AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
		AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		authorizationScopes[0] = authorizationScope;
		return newArrayList(new SecurityReference("mykey", authorizationScopes)); //18--Here we same key defined in the security scheme mykey
	}
 
	@Bean
	SecurityConfiguration security() {
		return new SecurityConfiguration( //19-- Optional swagger-ui security configuration for oauth and apiKey settings
				"test-app-client-id", 
				"test-app-realm", 
				"test-app", 
				"apiKey");
	}
 
	@Bean
	UiConfiguration uiConfig() {
		return new UiConfiguration("validatorUrl");
	}*/
 
}
