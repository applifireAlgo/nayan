package com.test.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.test.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.test.app.server.repository.AddressRepository;
import com.test.app.shared.location.Address;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.test.app.shared.location.AddressType;
import com.test.app.server.repository.AddressTypeRepository;
import com.test.app.shared.location.City;
import com.test.app.server.repository.CityRepository;
import com.test.app.shared.location.Country;
import com.test.app.server.repository.CountryRepository;
import com.test.app.shared.location.State;
import com.test.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase {

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("IZ0IUk322PAfvvOrI4o5hmPfmT6HLpHodYPWtQQ8TlYiIP7GpK");
            addresstype.setAddressTypeDesc("qf1Z2YqLhgk2GHUB8v7HSAEd1OoqhDvF2W8z0rtTxyq8ki0985");
            addresstype.setAddressTypeIcon("VMKSDGUtr7uTLlKWVTirYbmUzZhucSY2ZJPjqL5eP3KtA3TJTN");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(0);
            city.setCityCodeChar2("4oIUJGudnMCxs0FjxZ8O7vyjra8HgOkP");
            city.setCityDescription("cbfBrZBHsE8dnYODMmyqQ0AixX5eENkvuCAlxIHrvRnRHUhMiu");
            city.setCityFlag("3odTPGSDGzmkYPmpwTeWiO0oPdP80aHMzbWoNrAzyI1lG8Iltb");
            city.setCityLatitude(11);
            city.setCityLongitude(8);
            city.setCityName("PvUiE80n3Yj9xlCySwkMltsvW4E4ilgFxOaVNkkRm8vXawZtzh");
            Country country = new Country();
            country.setCapital("bINViojn4RpaRFqKvWogYMD85FbLjKKT");
            country.setCapitalLatitude(9);
            country.setCapitalLongitude(6);
            country.setCountryCode1("NjH");
            country.setCountryCode2("fHl");
            country.setCountryFlag("DzSkAg2YaZ87HkOmnY9c7PwpvZkbBpEL4FTmL5X0gcTI0ucDrb");
            country.setCountryName("S6P7PPThFNGMruEn5EFDifzpxpYw1EDVVctHm10yJGavKD7KCy");
            country.setCurrencyCode("587");
            country.setCurrencyName("kkgbEqXfq3DXQY8P5A4ReEEO1kLbJhrQnPtAqWv44bWBe6qksD");
            country.setCurrencySymbol("dF0AJj7ysY9XA30irvhkKMOYdaSf5Rig");
            country.setIsoNumeric(10);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("SOYmqacbJruG5rYeEnJjBtTT8xOM2Op37ffnQ53cJY3RXf5KAJ");
            state.setStateCapitalLatitude(0);
            state.setStateCapitalLongitude(7);
            state.setStateCode(1);
            state.setStateCodeChar2("EVcDyGUJcITj77UbUAe7KjMCZ84hyKaM");
            state.setStateCodeChar3("cx10ft0VKrSRq1FWdp1Qkn0dqVS09bxR");
            state.setStateDescription("Vn1YgU8mrxrEfRjD9S1ZqvbVfQQ5IgOs0LyBivRO7hWx6vbeFY");
            state.setStateFlag("eA8pFvkwK2nnzCXEQItWmcYIU6IoqWfBQZyonKyww05CRxWCzK");
            state.setStateName("K28Ch6W8s9Y0TjbI5oDHRUAdeEPcOkyF0Pt7Ap2ZN765mB0qBL");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(1);
            city.setCityCodeChar2("YUoMg2tMVcqNFGoHthZ7e2TraJg8IKCb");
            city.setCityDescription("s5lrkBlZMsVd2zfyLOnDKo1F9LhuQOei8gJlZdOPzoHb1zmHyX");
            city.setCityFlag("9dQ9pmdPizQamAmmp8QTHA0hfbqjuufNEUmCM6rGZFYLrGPKVj");
            city.setCityLatitude(5);
            city.setCityLongitude(11);
            city.setCityName("DipwYRL3bP7ikq7CVgdjAsnTLYoWcAaoyzWPvYf0DBcJvUa1mg");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            Address address = new Address();
            address.setAddress1("MgGKGnW0TaP58ZKEP4PHqKrIrQVradK43eZevwLegFIyw2tI8b");
            address.setAddress2("U8msKiifBOKajo3TVlKgq2Qzam614v6nAPimoHxfmuK4sBfn06");
            address.setAddress3("lBQ9SQBOSmMxQErfC6cdqrbugdJLYIf8JyeHJ65nRh9YaVMVAI");
            address.setAddressLabel("EfV98CVjwRy");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("5HIQp5VoXRAVX09CHHzA47gUHAreynTAIt8dPKJWSrurgZAmk7");
            address.setLongitude("cTke9gGPgS5u8EvcRhwkvDdsDYYsKvU4Tim2ZqF6iFv8YAWCP2");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("pVZ9xh");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.setEntityValidator(entityValidator);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setAddress1("XYtNMKKfeiblrNSuXgOjiqGPfNYTgYEY0mbX9cXUTPFXoZnBiV");
            address.setAddress2("OKMwamv9psy4QklEJqq7RBPj4s7oQzpe0u69tPxeBMHAsmcrRn");
            address.setAddress3("yD3vMCFGom6PTAs1WgbkfO45Bh6pis3QhRxta8oT81CRX24lCC");
            address.setAddressLabel("DelMevYauCE");
            address.setLatitude("00lW5Se5t0jCzC2TgTuR7gDB9umJCcKhiC4imZDPShUj3j4lYJ");
            address.setLongitude("wJV42BHS8GBpYQj5bNB9qz99XC6PBOJMHL5G8IIgequSKRfDJO");
            address.setVersionId(1);
            address.setZipcode("4br5UA");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
