package autoberlo.autoberlo.service;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * Utility class to access Spring-managed beans from non-Spring managed classes.
 *
 * This class implements {@link ApplicationContextAware} to capture the {@link ApplicationContext}
 * at runtime and provides a static method {@code getBean()} to retrieve beans programmatically.
 *
 * Useful in cases where dependency injection is not directly possible (e.g., inside static contexts).
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Component
public class SpringContext implements ApplicationContextAware {

    private static ApplicationContext context;

    /**
     * Returns a Spring-managed bean of the given class type.
     *
     * @param beanClass the class of the bean to retrieve
     * @param <T> the type of the bean
     * @return an instance of the requested bean
     */

    public static <T extends Object> T getBean(Class<T> beanClass) {
        return context.getBean(beanClass);
    }

    /**
     * Sets the {@link ApplicationContext} when the application starts.
     * This method is called automatically by Spring.
     *
     * @param context the application context to set
     * @throws BeansException if context setting fails
     */

    @Override
    public void setApplicationContext(ApplicationContext context) throws BeansException {
        setContext(context);
    }

    /**
     * Thread-safe setter for the static application context.
     *
     * @param context the application context to set
     */


    private static synchronized void setContext(ApplicationContext context) {
        SpringContext.context = context;
    }
}
